import * as actions from './actions';

// Dentro del `it()` para la accion `loadThreadsRequest`
describe('when load Threads Request', () => { 

	it('load Threads', () => {
            const action = actions.loadThreadsRequest();

            expect(action.type).toBe('forum-app/LOAD_THREADS_REQUEST');
    });
});

// Dentro del `it()` para la accion `loadThreadsSuccess`
describe('when load Threads is Success', () => { 

	it('returns a list of threads', () => {
            const threads = [{ title: 'foo', body: 'bar'}];
            const action = actions.loadThreadsSuccess(threads);

			expect(action.payload).toBe(threads);
   });
});

// Dentro del `it()` para la accion `loadThreadsFailure`
describe('when load Threads Failure', () => {

    it('returns an error', () => {	
		const error = true;
		const action = actions.loadThreadsFailure(error);

		expect(action.payload).toBe(error);
   });
});