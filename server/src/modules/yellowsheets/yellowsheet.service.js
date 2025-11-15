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

