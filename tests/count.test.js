const addCountToName = require('../src/commands/count.js').addCountToName;

describe('addCountToName function with various structures', () => {

    test('should add count to an organization and its departments', () => {
        const data = {
            name: 'Organization',
            departments: [
                {name: 'HR', employees: ['John', 'Jane', 'Doe']},
                {name: 'IT', employees: ['Alice', 'Bob']}
            ]
        };

        const result = addCountToName(data);

        expect(result.name).toBe('Organization [2]');
        expect(result.departments[0].name).toBe('HR [3]');
        expect(result.departments[1].name).toBe('IT [2]');
    });

    test('should work with a project and its tasks', () => {
        const data = {
            name: 'Project Alpha',
            tasks: [
                {name: 'Task 1', subtasks: ['Subtask A', 'Subtask B']},
                {name: 'Task 2', subtasks: ['Subtask C']}
            ]
        };

        const result = addCountToName(data);

        expect(result.name).toBe('Project Alpha [2]');
        expect(result.tasks[0].name).toBe('Task 1 [2]');
        expect(result.tasks[1].name).toBe('Task 2 [1]');
    });

    test('should add count to a library and its bookshelves', () => {
        const data = {
            name: 'Library',
            bookshelves: [
                {name: 'Fiction', books: ['1984', 'Brave New World']},
                {name: 'Non-Fiction', books: ['Sapiens']}
            ]
        };

        const result = addCountToName(data);

        expect(result.name).toBe('Library [2]');
        expect(result.bookshelves[0].name).toBe('Fiction [2]');
        expect(result.bookshelves[1].name).toBe('Non-Fiction [1]');
    });

});