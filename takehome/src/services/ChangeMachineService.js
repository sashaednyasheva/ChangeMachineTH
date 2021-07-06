import axios from 'axios';

class ChangeMachineService {

    getAll(){
        return axios.get("http://localhost:8080/all");
    }

    addNew(Obj){
        console.log(Obj)
        return axios.post("http://localhost:8080/add_new", Obj);   
    }

}

export default new ChangeMachineService()