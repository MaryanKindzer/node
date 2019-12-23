import { Service } from 'typedi';

import UniversitiesRepository from "./universities.repository";

@Service()
export default class UniversitiesService {

    constructor(private readonly universitiesRepository: UniversitiesRepository) {}

    public getAllUniversities(): any {
        return this.universitiesRepository.getAllUniversities();
    }

    public deleteUniversity(id: number): boolean {
        return this.universitiesRepository.deleteUniversity(id);
    }

    public addUniversity(university: string): any {
        return this.universitiesRepository.addUniversity(university);
    }
}