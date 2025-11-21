const service = require('./yellowsheet.service');

exports.getErp_yspartnum = async (req, res) => {
    try {
        let partnum = req.params.partnum;
        let revision = req.params.revision;
        let layer = req.params.layer;
        const result = await service.getErp_yspartnum(partnum, revision, layer);
        res.json(result);
    } catch (error) {
        console.error('Error in controller while fetching ERP yellowsheets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.getErp_yssearh = async (req, res) => {
    try {
        let partnum = req.params.partnum;
        let revision = req.params.revision;
        let layer = req.params.layer;
        const result = await service.getErp_yssearh(partnum, revision, layer);
        res.json(result);
    } catch (error) {
        console.error('Error in controller while fetching ERP yellowsheets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getErp_yssearh_detail = async (req, res) => {
    try {
        let partnum = req.params.partnum;
        let revision = req.params.revision;
        let layer = req.params.layer;
        let type = req.params.type;
        let version = req.params.version;
        const result = await service.getErp_yssearh_detail(partnum, revision, layer, type, version);
        res.json(result);
    } catch (error) {
        console.error('Error in controller while fetching ERP yellowsheets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getRepostSearchYellowsheet = async (req, res) => {
    try {
        const report = await service.generateYellowsheetReport();
        res.setHeader('Content-Type', 'application/pdf');
        res.send(report);
    } catch (error) {
        console.error('Error generating yellowsheet report:', error);
        res.status(500).json({ error: 'Failed to generate report' });
    }
};