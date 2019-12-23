import * as fs from 'fs';
import { Service } from 'typedi';

@Service()
export default class UniversitiesRepository {

    public getAllUniversities(): any {
        const universitiesString = fs.readFileSync(process.env.DB_USERS, {
            encoding: 'utf8'
        });
        return JSON.parse(universitiesString).universities;
    }

    private removeUniversity(univers, id_req: number): object {
        const res = univers.reduce( ({universities, status}, item) => {
            const {id} = item;
            if (id_req===id) {
                status = true;
            } else {
                universities.push(item);
            }
            return {universities, status};
        }, {universities:[], status:false});
        return res;
    }

    public deleteUniversity(id_from_req: number): boolean {
        const universitiesString = fs.readFileSync(process.env.DB_USERS, {
            encoding: 'utf8'
        });
        const {users, universities:unis} = JSON.parse(universitiesString);
        const {universities, status} = this.removeUniversity(unis, id_from_req);
        if (status) {
            const json = JSON.stringify({users, universities});
            fs.writeFileSync(process.env.DB_USERS, json, 'utf8');
            return true;
        }
        return false;
    }

    public addUniversity(university: String): any {
        return {"Type": "Success"};
    }
}