-- 2003.03.17 ?????? create
-- 2013.02.07 yuhong =0.0787判斷:'PU' 改 in('PU','PU1')
-- 2014.08.04 yuhong 00010169 新增G5
-- dril_dtl 3,'C37U037','a',0,'CBK','D1  ','T','adimin'
CREATE procedure dbo.dril_dtl
                @vchoice int,  --選項
                @partnum char(8),  --料號
                @revision char(4),  --版序
                @layer int,             --層別
                @version char(3),   --版本
                @fw char(4),         --工單鑽孔資料之流程
                @kind char(3),       --種類
                @dr_user char(5)    --使用者
as
-- exec dril_dtl 3,'G58Q006','A','0','R99','d3  ','G3','AA'
/*黃單取鑽頭資料條件:  2003/10/30
   種類        流程fw    PTH    代碼no
  ======       ======   =====   =======================================
   PT            D        Y
   NP            D        N
   SK            CSK
   H1            D1
   H2            D2             不要T19,T20
   H3            D3
   1             D1             IN (TH,PU,DH,PP,HH,SM,NC) + (PIN,CCD,MH*) 12/11加,並將PTH='N'取消
   2             D1             NOT IN (TH,PU,DH,PP,HH,SM,NC) ,且不要T19,T20 +(PIN,CCD,MH*) 12/11加
   G1            D1
   G2            D2
   SSK           SSK            -- 2009.04.14 add by Frank
   G3            D3             -- 2009.06.24 add by Frank
   其他          D
 ===========================================================
  種類非H2與H3時加T065(0.0197),
  料號為'Q68'時加T066(第一支鉆頭直徑)
  各料號若無T019,T020時,則編號往前編碼
  相同孔直徑但流程欄有*(D1*即槽刀)則不可併鉆
   T19 代碼為PU
   T20 代碼為DH
   D4不列入

92/12/08 (1)規則加上同一孔直徑之槽刀與槽連可併鉆,且SHOW槽
              (2)T19,T20若流程相同之孔直徑,則併鉆
92/12/11 (1)鉆孔流程為DR則不入黃單
              (2)黃單種類為 1 ,將PTH='N'取消,代碼加上 (PIN,CCD,MH*)
                  黃單種類為 2,代碼加上 (PIN,CCD,MH*)
              (3)T19條件改為先找代碼為PU,若無,則找孔直徑為0.0787當作T19
92/12/16 (1)(T19,T20)相同孔直徑,若是槽刀(D1*)則連孔與一般孔可併鉆
                                                     ,若非槽刀(D1  )則連孔與一般孔不可併佔
94/05/10 將槽刀(fw=D1*)與連孔(hole:10*2*3)之工程鉆孔資料(prodhole)之抓取方式
              改為欄位TsoDow(槽刀),LianKong(連孔)
94/11/11 需求單0510071修改種類為H2的編號跳過T019,T020
97/02/13 需求單(0801073)將代碼no為DA的孔數另外分開,因其為導引孔
97/02/14 需求單(0801075)新增G1,G2種類
97/03/17 需求單(0803039)取消代碼no為DA的孔數另外分開的程式
98/03/04 加入G2T種類
98/04/10 加入慢欄位
99/06/24 加入G3、G3T、H3、H3T種類
*/
/*
 declare        @vchoice int,  --選項
                @partnum char(8),  --料號
                @revision char(4),  --版序
                @layer int,             --層別
                @version char(3),   --版本
                @fw char(4),         --工單鑽孔資料之流程
                @kind char(2),       --種類
                @dr_user char(5)    --使用者
set @vchoice=2
set @partnum='a41i001'
set @revision='a'
set @layer=0
set @version='9'
set @fw='d1'
set @kind='h1'
set @dr_user='123'*/

declare @partnum1 char(8),
        @revision1 char(4),
        @layer1 int,
        @fw1 char(3),
        @holeL1 real,
        @holenn1 int

declare @num int,
        @item char(3),
        @holel_chk real,
        @no_chk char(2),
        @fw_1 char(4),
        @fw_2 char(2),
        @mark1 char(3),
        @num1 char(3),
        @diam_no real,
        @diam_no1 real,
        @mark1_1 char(3),
        @holenn1_1 int,
        @num1_1 char(3)

Declare @errno int,@errmsg varchar(250),@date datetime
select @date = getdate()
set @fw_1=rtrim(substring(@fw,1,3))+'%' --D,D1,D2,D3....
set @fw_2=substring(@fw,4,1)                --PTH='Y','N',' '
CREATE TABLE #dril_cursor
(PART_NBR char(8),revision char(4),layer int,kind char(3),version char(3),type char(2),
 item char(3),b_diameter float,holenum int null,makeup int,mark1 char(3) null,mark2 char(1)null,
 dr_user char(5),dr_update datetime)

CREATE TABLE #tmp_1
(partnum char(8),revision char(4),layer int,fw char(3) null,no char(3) null,hole varchar(12) null,
 holel float,holenn int,TsoDow char(1) ,LianKong char(1),Slow char(1))
/******************************************************************************/
if @kind='1'
begin
  insert into #tmp_1
  SELECT partnum,revision,layer,fw,isnull(no,' '),hole,holel,holenn,TsoDow,LianKong,Slow
  FROM prodhole(nolock)
  where partnum=@partnum and revision=@revision and layer=@layer
  and rtrim(fw)<>'D4'   and rtrim(fw)<>'DR'           --D4不入黃單,給QA看的
  and fw like rtrim(@fw_1)        -- and pth=@fw_2
  and (rtrim(no) IN ('TH','PU','DH','PP','HH','SM','NC','PIN','CCD') or left(rtrim(no),2)='mh')
  order by holel
end
else
begin
  if @kind='2'
  begin
    insert into #tmp_1
    SELECT partnum,revision,layer,fw,isnull(no,' '),hole,holel,holenn,TsoDow,LianKong,Slow
    FROM prodhole(nolock)
    where partnum=@partnum and revision=@revision  and layer=@layer
    and fw like rtrim(@fw_1)  and rtrim(fw)<>'D4'  and rtrim(fw)<>'DR'     --D4不入黃單,給QA看的
    and (rtrim(no) not in ('TH','PU','DH','PP','HH','SM','NC','PIN','CCD') and  left(rtrim(no),2)<>'mh')
    order by holel
  end
  else
  begin
    if @fw_2=' '
    begin
      insert into #tmp_1
      SELECT partnum,revision,layer,fw,isnull(no,' '),hole,holel,holenn,TsoDow,LianKong,Slow
      FROM prodhole(nolock)
      where partnum=@partnum and revision=@revision   and layer=@layer
      and fw like rtrim(@fw_1)   and rtrim(fw)<>'D4'  and rtrim(fw)<>'DR'   --D4不入黃單,給QA看的
      order by holel
    end
    else
    begin
      insert into #tmp_1
      SELECT partnum,revision,layer,fw,isnull(no,' '), hole,holel,holenn,TsoDow,LianKong,Slow
      FROM prodhole(nolock)
      where partnum=@partnum and revision=@revision   and layer=@layer
      and fw like rtrim(@fw_1) and pth=@fw_2  and rtrim(fw)<>'D4'  and rtrim(fw)<>'DR'   --D4不入黃單,給QA看的
      order by holel
    end
  end
end
--select * from #tmp_1
/******************************************************************/
IF @kind not in ('H2','2','G2','G2T','H2T','G3','G3T','H3','H3T','G5')
begin
  if not exists (select * from #tmp_1 where ltrim(rtrim(no)) in('PU','PU1')) --找不到T19,用0.0787作T19
  begin
    update #tmp_1 set no='PU' where convert(varchar(10),holel)='0.0787'
  end
end

/***************************************************************/
/*
SELECT  num='050',*,mk1=case when  right(rtrim(fw),1)='*'  then '*'
                                                   else ' '   end,  --槽刀
               mk2=case when hole like '%*%'  then '*'
                 else  ' ' end                       --連孔
into #tmp_2
from #tmp_1
where  ltrim(rtrim(no)) not in('PU','DH')

union  --加第19支鉆頭   處理T19若流程相同之孔直徑,孔數相加(併鉆)
          --92/12/16改 T19,T20相同孔直徑,若是槽刀(D1*)則連孔與一般孔可併鉆
           --                                                 ,若非槽刀(D1_)則連孔與一般孔不可併佔
select  num='019', partnum,revision,layer,fw,no,hole,holel,holenn=sum(holenn),mk1=' ',mk2=' '
         from  #tmp_1
         where  holel=(select holel from #tmp_1 where ltrim(rtrim(no))='PU')
        group by  partnum,revision,layer,fw,no,hole,holel

union  --加第20支鉆頭  處理T20若流程相同之孔直徑,孔數相加(併鉆)

select  num='020', partnum,revision,layer,fw,no,hole,holel,holenn=sum(holenn),
                 mk1=case when  right(rtrim(fw),1)='*'  then '*'
                                  else ' '   end,    --槽刀
                 mk2=case when hole like '%*%'  then '*'
                                  else  ' ' end      --連孔
         from  #tmp_1
         where  holel=(select holel from #tmp_1 where ltrim(rtrim(no))='DH')
         group by  partnum,revision,layer,fw,no,hole,holel

delete #tmp_2 where num='050' and  holel=(select holel from #tmp_1 where ltrim(rtrim(no))='PU') --刪除與T19同孔徑資料
delete #tmp_2 where num='050' and  holel=(select holel from #tmp_1 where ltrim(rtrim(no))='DH')--刪除與T20同孔徑資料

*/
/********************************************************************/
/*--92/12/16 改方式
SELECT  num='050',*,mk1=case when  right(rtrim(fw),1)='*'  then '*'
                                                   else ' '   end,  --槽刀
               mk2=case when hole like '%*%'  then '*'
                                else  ' ' end                       --連孔
into #tmp_2
from #tmp_1
*/
--93/05/10 改槽刀連孔抓取方式 TsoDow,LianKong
SELECT num='050',*,mk1=case when  TsoDow='y'  then '*'
    else ' '   end,  --槽刀
                   mk2=case when LianKong='y'  then '*'
                            else  ' ' end,    --連孔
                   mk3=case when Slow='y' then '*' else ' ' end   -- 慢
into #tmp_2
from #tmp_1

--加第19支鉆頭   處理T19若流程相同之孔直徑,孔數相加(併鉆)
--92/12/16改 T19,T20相同孔直徑,若是槽刀(D1*)則連孔與一般孔可併鉆
-- ,若非槽刀(D1_)則連孔與一般孔不可併佔

declare @vmk1 char(1),@vmk2 char(1),@vmk3 char(1),@vholel real

select @vholel=holel,@vmk1=mk1,@vmk2=mk2,@vmk3=mk3 from #tmp_2 where ltrim(rtrim(no)) in('PU','PU1')
if @vmk1='*'
begin
  if @kind not in ('G3','G3T','H3','H3T','CBK','SBK')
  begin
    update #tmp_2 set num='019',fw='PU',mk2=' '  where holel=@vholel and mk1=@vmk1 and mk2=@vmk2 and mk3=@vmk3
  end
end
if @vmk1=' '
begin
  if @kind not in ('G3','G3T','H3','H3T','CBK','SBK')
  begin
    update #tmp_2 set num='019',fw='PU'  where holel=@vholel and mk1=@vmk1 and mk2=@vmk2 and mk3=@vmk3
  end
end
if exists(select * from #tmp_2 where ltrim(rtrim(no))='DH' )
begin
 select @vholel=holel,@vmk1=mk1,@vmk2=mk2,@vmk3=mk3 from #tmp_2 where ltrim(rtrim(no))='DH'

 if @vmk1='*'
 begin
   if @kind not in ('G3','G3T','H3','H3T','CBK','SBK')
   begin
     update #tmp_2 set num='020',fw='DH',mk2=' '  where holel=@vholel and mk1=@vmk1 and mk2=@vmk2 and mk3=@vmk3
   end
 end
 if @vmk1=' '
 begin
   if @kind not in ('G3','G3T','H3','H3T','CBK','SBK')
   begin
    update #tmp_2 set num='020',fw='DH'  where holel=@vholel and mk1=@vmk1 and mk2=@vmk2 and mk3=@vmk3
   end
 end
end
--select * from #tmp_2
/*********************************************************************/
SELECT partnum,revision,layer,fw,holeL,mark=mk1+mk2+mk3,mk1,mk2,mk3,num,holenn=sum(holenn)
into #kk
FROM #TMP_2
group by partnum,revision,layer,num,fw,holel,mk1,mk2,mk3
order by holel
/*
SELECT partnum,revision,layer,fw,holeL,mark=mk1+mk2+mk3,num,holenn=sum(holenn)
FROM #TMP_2
group by partnum,revision,layer,fw,holel,mk1+mk2+mk3,num
order by num,holel,mark
*/
DECLARE prodhole_Cursor INSENSITIVE CURSOR
FOR SELECT partnum,revision,layer,fw,holeL,mark=mk1+mk2+mk3,num,holenn=sum(holenn)
FROM #TMP_2
    group by partnum,revision,layer,fw,holel,mk1+mk2+mk3,num
    order by num,holel,mark

OPEN prodhole_Cursor

FETCH NEXT FROM prodhole_Cursor INTO @partnum1,@revision1,@layer1,@fw1,@holeL1,@mark1,@num1,@holenn1
set @num=1000  --編號從1000開始計算,只取後三碼
set @holel_chk=@holel1
set @no_chk='   '
set @diam_no=0  --Q68抓第一支(最小)鑽頭直徑作T066支鑽頭
set @diam_no1=0  --判斷是否換孔徑
set @holenn1_1=0
WHILE @@FETCH_STATUS = 0
BEGIN
  set @diam_no1=@holel1
  set @mark1_1=@mark1
  set @num1_1=@num1

  if @num1_1='050' and @diam_no=0
  begin
    set @diam_no=@holel1
  end
  if left(@mark1_1,1)='*' and @holenn1_1>0
  begin
  --   set @mark1_1='* '        --同一孔直徑之槽刀與槽連可併鉆,且SHOW槽
    if substring(@mark1_1,3,1)='*'  -- 98/08/04 增加show慢判斷
      set @mark1_1='***'
    else
      set @mark1_1='** '        --93/05/10 改為同一孔直徑之槽刀與槽連可併鉆,且SHOW槽連
  end
  set @holenn1_1=@holenn1_1+@holenn1  --孔數累加

--    insert into #dril_cursor (part_nbr,revision,layer,version,kind,type,item,b_diameter,holenum,makeup,mark1,mark2,dr_user,dr_update)
--                        values (@partnum,@revision,@layer,@version,@kind,substring(@fw,2,1),@item,@holel1,@holenn1,0,@mark1,' ',@dr_user,@date)

  FETCH NEXT FROM prodhole_Cursor INTO @partnum1,@revision1,@layer1,@fw1,@holeL1,@mark1,@num1,@holenn1

  if @diam_no1<>@holel1
     OR left(@mark1_1,1)<>left(@mark1,1)
     or (left(@mark1_1,1)=' ' and  substring(@mark1_1,2,1)<>substring(@mark1,2,1))
     or (left(@mark1_1,2)='  ' and  substring(@mark1_1,3,1)<>substring(@mark1,3,1))
     or @@FETCH_STATUS <> 0
   --孔徑不同時或槽刀與空白時或最後一筆時
  begin
    if @num1_1='019'
    begin
      set @no_chk='*'+substring(@no_chk,2,1)
    end
    if @num1_1='020'
    begin
      set @no_chk=substring(@no_chk,1,1)+'*'
    end
    if @num1_1='050'  --沒編號之預設值
    begin
      set @num=@num+1       --編號累計
      IF @num=1019 and substring(@no_chk,1,1)='*'
      begin
        select @num=@num+1       --編號跳過019
      end
 IF @num=1020 and substring(@no_chk,2,1)='*'
      begin
        select @num=@num+1       --編號跳過020
      end
    --需求單0510071修改2005/11/11
    --00014104-->20160321新增'','T'
      IF @num=1019 and @kind in ('','T','H2','G2','G2T','H2T','G3','G3T','H3','H3T','G5')
      begin
        select @num=@num+2      --編號跳過019,020
      end
      IF @num=1020 and @kind in ('','T','H2','G2','G2T','H2T','G3','G3T','H3','H3T','G5')
      begin
        select @num=@num+1      --編號跳過020
      end
      IF @num=1065 and @kind not in ('H2','H3','G2','G2T','H2T','G3','G3T','H3T','G5')
      begin
        select @num=@num+1       --編號跳過065
      end
      IF @num=1066 and  LEFT(@partnum,3)='Q68'
      begin
        select @num=@num+1       --編號跳過066
      end

      set @item=right(str(@num,4),3)
    end
    else
    begin
      set @item=@num1_1
    end

    insert into #dril_cursor (part_nbr,revision,layer,version,kind,type,item,b_diameter,holenum,makeup,
                              mark1,mark2,dr_user,dr_update)
    values (@partnum,@revision,@layer,@version,@kind,substring(@fw,2,1),@item,@diam_no1,@holenn1_1,0,
            @mark1_1,' ',@dr_user,@date)
    set @holenn1_1=0

  end
END

if  @kind not in ('H2','H3','G2','G2T','H2T','G3','G3T','H3T','CBK','SBK','G5')--加T065
begin
  insert into #dril_cursor (part_nbr,revision,layer,version,kind,type,item,b_diameter,holenum,makeup,
                            mark1,mark2,dr_user,dr_update)
  values (@partnum,@revision,@layer,@version,@kind,'1','065',0.0197,0,0,' ',' ',@dr_user,@date)
end
if LEFT(@partnum,3)='Q68'  --加T066
begin
  insert into #dril_cursor (part_nbr,revision,layer,version,kind,type,item,b_diameter,holenum,makeup,
                            mark1,mark2,dr_user,dr_update)
  values (@partnum,@revision,@layer,@version,@kind,'1','066',@diam_no,0,0,' ',' ',@dr_user,@date)
end
CLOSE prodhole_Cursor
DEALLOCATE prodhole_Cursor
--select * from  #dril_cursor

----------------------------------------------------------------------------------------

if @vchoice=1 -- 查詢
begin
  select *,convert(varchar(10),b_diameter) as hole from  #dril_cursor order by item
end
else if @vchoice=2  --新增
begin
  Begin Tran trans_1
  delete dl_drildtl where part_nbr=@partnum and revision=@revision and layer=@layer and kind=@kind and version=@version
  insert into DL_DRILDTL  select * from  #dril_cursor
  IF @@error<>0  or @@rowcount=0
  begin
    select @errno=50000, @errmsg='鑽孔明細新增失敗'
    Goto error
 end
  Commit Tran trans_1
end
else if @vchoice=3 -- 工單鉆孔與黃單資料比對
begin
  select * into #dril_tmp from dl_drildtl(nolock)
  where part_nbr=@partnum and revision=@revision and layer=@layer
  and kind=@kind and version=@version

  --工單目前鉆孔數  #dril_cursor  黃單目前鉆孔數    #deil_tmp
  select a.*,b.* from #dril_cursor a FULL OUTER JOIN #dril_tmp b
  on a.b_diameter= b.b_diameter and a.mark1=b.mark1 and a.item=b.item
  order by b.item,b.b_diameter
end
else  if @vchoice=4 --check
begin
  select *,convert(varchar(10),holel) as hole from  #kk
end

RETURN

Error:
Begin
  Raiserror @errno @errmsg
  Rollback Transaction trans_1
End