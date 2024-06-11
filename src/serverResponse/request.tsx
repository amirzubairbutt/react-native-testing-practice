
export default {
    makeAPIRequest: (page: number) => {
        let data: any = []
        return fetch(`https://randomuser.me/api?lego&randomapi?results=${page}&results=10&seed=abc`)
        //     .then(resp => resp.json())
        //     .then(resp => { data = resp })
        //     .catch(err => console.error("Fetch Error -> ", err))
        // return data;
    }
}