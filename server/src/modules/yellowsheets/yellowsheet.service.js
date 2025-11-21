const {
    createErpConnection,
    closeErpConnection,
} = require('../../config/db.mssql');

const {generateDemoReport} = require('../../core/reports/report.service');

exports.getErp_yspartnum = async (partnum, revision, layer) => {
    let erpConn = null;
    try {
        // 🔌 เปิดการเชื่อมต่อใหม่
        erpConn = await createErpConnection();

        // 📊 Query 1: ดึงข้อมูล hole data
        const result = await erpConn.query(`
            select partnum,FW,NO,Hole,HoleL,HoleN,PTH,TsoDow,LianKong,ldhole,Slow,TsoLength,offset 
            from prodhole(nolock) 
            where partnum='${partnum}' and revision='${revision}' and layer='${layer}' 
            order by HoleL
        `);

        // 📊 Query 2: ดึงข้อมูล detail data
        const result2 = await erpConn.query(`
            select a.partnum,a.revision,a.layer,a.customerpartnum,a.GrossAreaLeng,a.GrossAreaWid,a.ProdLeng,a.ProdWid, 
                   b.layername,a.type,a.drillpn
            from prodbasic a(nolock), numoflayer b(nolock)
            where a.partnum = '${partnum}' and a.revision = '${revision}' and a.layer=b.layer
        `);

        return {
            success: true,
            holeData: result,
            dtldata: result2
        };

    } catch (error) {
        console.error('❌ Error fetching ERP yellowsheets:', error);
        throw new Error(`Database query failed: ${error.message}`);
    } finally {
        // 🔒 ปิดการเชื่อมต่อเสมอ (ไม่ว่าจะสำเร็จหรือไม่)
        if (erpConn) {
            await closeErpConnection(erpConn);
        }
    }
};

exports.getErp_yssearh = async (partnum, revision, layer) => {
    let erpConn = null;
    try {
        // 🔌 เปิดการเชื่อมต่อใหม่
        erpConn = await createErpConnection();

        // 📊 Query: ดึงข้อมูลการค้นหา
        const result = await erpConn.query(`
            SELECT t1.PART_NBR AS 'Partnum', t1.REVISION AS 'Foreword', t1.LAYER AS 'Layer',
                   t1.KIND AS 'Type', t1.VERSION, n.LayerName,
                   t1.OUT_L AS 'Cutting Length', t1.OUT_W AS 'Cutting Width', 
                   t1.MHX1 AS 'MH-X1', t1.MHY1 AS 'MH-Y1', t1.MHX2 AS 'MH-X2', t1.MHY2 AS 'MH-Y2',
                   t1.MHX3 AS 'MH-X3', t1.MHY3 AS 'MH-Y3', t1.MHX4 AS 'MH-X4', t1.MHY4 AS 'MH-Y4',
                   t1.MHX5 AS 'MH-X5', t1.MHY5 AS 'MH-Y5',
                   t1.STARTX AS 'Zero Point-X', t1.STARTY AS 'Zero Point-Y',
                   t1.QUADRANT, t1.NOTE AS 'Remarks', 
                    CASE 
                 WHEN t1.MARK = '1' THEN 'Production OK'
                 WHEN t1.MARK = '2' THEN 'Review OK'
                 WHEN t1.MARK = '3' THEN 'OPEN'
                 WHEN t1.MARK = '4' THEN 'SR'
                 ELSE 'In progress'
                 END AS 'status'
            FROM dl_drilmst t1 WITH (NOLOCK)
            LEFT JOIN NumofLayer n WITH (NOLOCK) ON t1.LAYER = n.Layer
            WHERE t1.PART_NBR='${partnum}' and t1.REVISION='${revision}' and t1.LAYER='${layer}' 
            ORDER BY t1.PART_NBR
        `);


        return {
            success: true,
            holeData: result

        };

    } catch (error) {
        console.error('❌ Error fetching ERP search data:', error);
        throw new Error(`Database query failed: ${error.message}`);
    } finally {
        // 🔒 ปิดการเชื่อมต่อเสมอ (ไม่ว่าจะสำเร็จหรือไม่)
        if (erpConn) {
            await closeErpConnection(erpConn);
        }
    }
};


exports.getErp_yssearh_detail = async (partnum, revision, layer, type, version) => {
    let erpConn = null;
    try {
        // 🔌 เปิดการเชื่อมต่อใหม่
        erpConn = await createErpConnection();

        // 📊 Query: ดึงข้อมูลการค้นหา
        const ysdetail = await erpConn.query(`
          SELECT t1.PART_NBR AS 'Partnum', t1.REVISION AS 'Foreword', n.LayerName,t1.KIND AS 'Type',t1.VERSION,n.LayerName,
                   t1.OUT_L AS 'Cutting Length', t1.OUT_W AS 'Cutting Width', 
                   t1.MHX1 AS 'MH-X1', t1.MHY1 AS 'MH-Y1', t1.MHX2 AS 'MH-X2', t1.MHY2 AS 'MH-Y2',
                   t1.MHX3 AS 'MH-X3', t1.MHY3 AS 'MH-Y3', t1.MHX4 AS 'MH-X4', t1.MHY4 AS 'MH-Y4',
                   t1.MHX5 AS 'MH-X5', t1.MHY5 AS 'MH-Y5',t1.STARTX AS 'Zero Point-X', t1.STARTY AS 'Zero Point-Y',t1.QUADRANT AS 'AV', t1.NOTE AS 'Remarks',t1.CHUSER1 AS 'Creator',
                   t1.CHUSER2 AS Verifier,t1.CHUSER3 AS Reviewer, t1.IsShift AS 'Less than 1.9 times with hole not off', a.UseG93 AS 'Use G93', b.CustomerPartNum, b.Type AS 'Category',
				   t1.ONEPCS AS 'Single Layout',
				   CASE 
        WHEN t1.MARK = '1' THEN 'Production OK'
        WHEN t1.MARK = '2' THEN 'Review OK'
        WHEN t1.MARK = '3' THEN 'OPEN'
        WHEN t1.MARK = '4' THEN 'SR'
        ELSE 'In progress'
        END AS 'status'
            FROM dl_drilmst t1 WITH (NOLOCK)
            LEFT JOIN NumofLayer n WITH (NOLOCK) ON t1.LAYER = n.Layer
            LEFT JOIN DRL_tMstAnnex a WITH (NOLOCK) ON t1.PART_NBR = a.Partnum AND t1.REVISION = a.Revision AND t1.LAYER = a.Layer AND t1.KIND = a.KIND and t1.VERSION = a.VERSION
			LEFT JOIN prodbasic b WITH (NOLOCK) ON t1.PART_NBR = b.Partnum and t1.REVISION = b.Revision AND t1.LAYER = b.Layer
          where t1.PART_NBR='${partnum}' and t1.REVISION='${revision}' and t1.LAYER='${layer}' and t1.KIND='${type}' and t1.VERSION='${version}'
          order by t1.PART_NBR
        `);

        const yfdrilldata = await erpConn.query(`
            SELECT 
                a.ITEM AS 'Number',
                a.B_DIAMETER AS 'Hole Diameter',
                a.HOLENUM AS 'Number of Holes',
                a.TYPE AS 'Number of Drilling'
            FROM 
                dl_drildtl a WITH (NOLOCK)
            LEFT JOIN 
                dl_drilmst b WITH (NOLOCK)
                ON a.PART_NBR = b.PART_NBR 
                AND a.REVISION = b.REVISION 
                AND a.LAYER = b.LAYER 
                AND a.KIND = b.KIND 
                AND a.VERSION = b.VERSION
            WHERE 
                a.PART_NBR = '${partnum}' 
                AND a.REVISION = '${revision}' 
                AND a.LAYER = '${layer}'
                AND a.KIND = '${type}' 
                AND a.VERSION = '${version}'
            ORDER BY a.ITEM
        `);
        const wodrilldata = await erpConn.query(`
          SELECT a.FW As 'Process',NO AS 'Code', a.Hole AS 'Complete aperture',a.HOleL AS 'HoleDiameter', a.PTH,a.LDHole AS 'Laser drilling',a.TsoDow AS 'Slot Cutter',
a.LianKong AS 'ConnectHole',a.Slow,a.TsoLength AS 'Slot Length',a.Offset, a.HoleN AS 'Number of Holes' FROM prodhole a WITH (NOLOCK) 
RIGHT JOIN  dl_drilmst b WITH (NOLOCK) ON a.PartNum = b.PART_NBR 
		 and a.Revision = b.REVISION AND a.Layer = b.LAYER   WHERE 
                b.PART_NBR = '${partnum}' 
                AND b.REVISION = '${revision}' 
                AND b.LAYER = '${layer}'
        `);

        return {
            success: true,
            yellowdetail: ysdetail,
            yellowdrilldata: yfdrilldata,
            workorderdrilldata: wodrilldata,
        };

    } catch (error) {
        console.error('❌ Error fetching ERP search data:', error);
        throw new Error(`Database query failed: ${error.message}`);
    } finally {
        // 🔒 ปิดการเชื่อมต่อเสมอ (ไม่ว่าจะสำเร็จหรือไม่)
        if (erpConn) {
            await closeErpConnection(erpConn);
        }
    }
};

exports.generateYellowsheetReport = async () => {
    try {
        const report = await generateDemoReport();
        return report;
    } catch (error) {
        console.error('Error generating yellowsheet report:', error);
        throw new Error('Failed to generate report');
    }
} 
