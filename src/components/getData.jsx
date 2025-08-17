async function getData() {
  let res = await fetch(`https://kopikap-api.vercel.app/AllProducts`);
  let data = res.json();
  return data;
}

export default getData;
