import { Injectable } from "@nestjs/common";

export interface Employee {
    name : string;
    age:number;
    id : number;
}
@Injectable()
export class EmployeeService {
    private store = new Map<number, Employee>();

    addEmployee(employee: Employee) {
        this.store.set(employee.id, employee);
    }

    getEmployee(id: number)
    {
        return this.store.get(id);
    }

    getEmployees() {
        return Array.from(this.store).map(([_,employee]) => employee);
    }

    updateEmployee(id:number,employee: Employee)
    {
        this.store.set(id, employee);
    }

    deleteEmployee(id : number) {
        this.store.delete(id);
    }
}