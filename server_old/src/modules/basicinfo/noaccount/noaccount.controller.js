const svc = require('./noaccount.service');

exports.combo = {
  lines:      async (req, res) => res.json(await svc.getLines()),
  issueTypes: async (req, res) => res.json(await svc.getIssueTypes()),
  statuses:   async (req, res) => res.json(await svc.getStatuses()),
  layers:     async (req, res) => res.json(await svc.getLayers(req.query.partnum)),
  dcMark:     async (req, res) => res.json(await svc.getDcMark(req.query.partnum, req.query.layer)),
  routes:     async (req, res) => res.json(await svc.getRoutes(req.query.partnum, req.query.revision, req.query.layer)),
  rtSerial:   async (req, res) => res.json(await svc.getRtSerial(req.query.partnum)),
  dcControl:  async (req, res) => res.json({ controlled: await svc.checkDcControl(req.query.partnum) }),
};

exports.create = async (req, res) => {
  try {
    const data = await svc.createNoAccount(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
