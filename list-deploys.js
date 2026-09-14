const TOKEN = process.env.RAILWAY_TOKEN;
(async () => {
  const q = `query($input: DeploymentListInput!) {
    deployments(input: $input) {
      edges { node { id status createdAt } }
    }
  }`;
  const r = await fetch('https://backboard.railway.com/graphql/v2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + TOKEN },
    body: JSON.stringify({
      query: q,
      variables: {
        input: {
          projectId: '38d5f8a1-9cf2-4181-905f-51ef23920c7e',
          serviceId: '41412063-f738-4798-9250-c436e7375f98',
          first: 5
        }
      }
    })
  });
  const j = await r.json();
  console.log(JSON.stringify(j, null, 2));
})();
