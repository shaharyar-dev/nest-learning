import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
// import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { CreateEmployeeDto } from "./dto";
import { EmployeeService } from "./employees.service";


@Controller('/employees')
// Value Provider Class
export class EmployeesController {
    
    constructor(private employeeService: EmployeeService) {

    }
    //Create a new Employee
    @Post()
    createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
        this.employeeService.addEmployee(createEmployeeDto);
        return {message : "Employee created"};
    }

    //Get all Employee
    @Get()
    findAllEmployee()
    {
        return this.employeeService.getEmployees();
    }

    // Get Employee By ID
    @Get(":id")
    findEmployee(@Param("id") id:number) {
        return this.employeeService.getEmployee(+id);
    }

    // Update Employee
    @Put(":id")
    updateEmployee(@Param("id") id:number, @Body() updateEmployeeDto: CreateEmployeeDto) {
        this.employeeService.updateEmployee(+id,updateEmployeeDto);
        return {message : "Employee updated"};
    }

    // Delete Employee
    @Delete(":id")
    deleteEmployee(@Param("id") id:number) {
        this.employeeService.deleteEmployee(+id);
        return {message : "Employee Deleted"};
    }


}