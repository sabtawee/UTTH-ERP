const { getMesPool, getErpPool, getLocalPool } = require('../../config/db.mssql');

exports.getErp_yspartnum = async (partnum, revision, layer) => {
    try {

        const erpPool = await getErpPool();
        const result = await erpPool.query(`select partnum,FW,NO,Hole,HoleL,HoleN,PTH,TsoDow,LianKong,ldhole,Slow,TsoLength,offset from prodhole(nolock) 
          where partnum='${partnum}' and revision='${revision}' and layer='${layer}' 
          order by HoleL`);

        const result2 = await erpPool.query(`select a.partnum,a.revision,a.layer,a.customerpartnum,a.GrossAreaLeng,a.GrossAreaWid,a.ProdLeng,a.ProdWid, b.layername,a.type,a.drillpn
            from prodbasic a(nolock) ,numoflayer b(nolock)
            where a.partnum = '${partnum}' and a.revision = '${revision}' and a.layer=b.layer`);
            
        return { holeData: result, dtldata: result2 };
    } catch (error) {
        console.error('Error fetching ERP yellowsheets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getErp_yspartnum_1 = async (partnum, revision, layer) => {
    try {

        const erpPool = await getErpPool();
        const result = await erpPool.query(` SELECT t1.PART_NBR, t1.REVISION, t1.LAYER,t1.KIND AS 'Type',t1.VERSION,n.LayerName,
                   t1.OUT_L, t1.OUT_W, 
                   t1.MHX1, t1.MHY1, t1.MHX2, t1.MHY2,
                   t1.MHX3, t1.MHY3, t1.MHX4, t1.MHY4,
                   t1.MHX5, t1.MHY5,t1.STARTX AS 'Zero Point-X', t1.STARTY AS 'Zero Point-Y',t1.QUADRANT, t1.NOTE
            FROM dl_drilmst t1 WITH (NOLOCK)
            LEFT JOIN NumofLayer n WITH (NOLOCK) ON t1.LAYER = n.Layer
          where t1.PART_NBR='${partnum}' and t1.REVISION='${revision}' and t1.LAYER='${layer}' 
          order by t1.PART_NBR`);

        return { holeData: result };
    } catch (error) {
        console.error('Error fetching ERP yellowsheets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



