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

