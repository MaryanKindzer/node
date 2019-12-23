import { Controller, Get, Post, Delete, Param, Body } from 'routing-controllers';
import { Container } from 'typedi';

import UniversitiesOrchestrator from './universities.orchestrator';

@Controller()
export default class UniversitiesRouter {
    private universitiesOrchestrator: UniversitiesOrchestrator;

    constructor() {
        this.universitiesOrchestrator = Container.get(UniversitiesOrchestrator);
    }

    @Get('/universities')
    getAll() {
        return this.universitiesOrchestrator.getAllUniversities();
    }

    @Post('/universities')
    addUniversity(@Body() university: any) {
        return this.universitiesOrchestrator.addUniversity(university);
    }

    @Delete('/universities/:id')
    deleteUniversity(@Param("id") id: number) {
        const deletion = this.universitiesOrchestrator.deleteUniversity(id);
        if (deletion)
            return {"Status": "Ok"};
        return {"Status": "Fail"};
    }
}