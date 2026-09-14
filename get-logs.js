// Ambil log deployment
const TOKEN = process.env.RAILWAY_TOKEN;
(async () => {
  const deployId = process.argv[2];
  const limit = parseInt(process.argv[3] || '50');
  const q = `query($id: String!, $limit: Int!) {
    deploymentLogs(deploymentId: $id, limit: $limit) {
      message timestamp severity
    }
  }`;
  const r = await fetch('https://backboard.railway.com/graphql/v2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ query: q, variables: { id: deployId, limit } })
  });
  const j = await r.json();
  console.log(JSON.stringify(j, null, 2));
})();
