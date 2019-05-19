const fetchInit = {
    headers: new Headers({
        Authorization: `OAuth AgAAAAAD2cx7AADLW2c7MTXXVEGwgm8cOiXBqHc`,
    }),
    method: 'GET',
};
const fetchData = (getParams)=>{
    return fetch("https://cloud-api.yandex.net/v1/disk/resources?"+getParams,fetchInit);
}
export default fetchData;