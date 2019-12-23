import { Service } from 'typedi';

import { UniversitiesService } from '../../universities';

@Service()
export default class UniversitiesOrchestrator {

    constructor(private readonly universitiesService: UniversitiesService) {}

    public getAllUniversities(): any {
        return this.universitiesService.getAllUniversities();
    }

    public deleteUniversity(id: number): boolean {
        return this.universitiesService.deleteUniversity(id);
    }

    public addUniversity(university: string): any {
        return this.universitiesService.addUniversity(university);
    }
}