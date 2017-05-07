import test from 'ava';
import mkdirtemp from 'mkdirtemp';
import projectDirs from '.';

test('projectDirs() basics', async (t) => {
    const dirs = await projectDirs();
    t.true(Array.isArray(dirs));
    t.true(dirs.length > 0);
    t.true(dirs.includes(__dirname));
});

test('no code directory', async (t) => {
    const cwd = await mkdirtemp();
    const dirs = await projectDirs(cwd);
    t.is(dirs, null);
});
