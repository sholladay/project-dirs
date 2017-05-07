import path from 'path';
import util from 'util';
import fs from 'fs';
import test from 'ava';
import mkdirtemp from 'mkdirtemp';
import projectDirs from '.';

const writeFile = util.promisify(fs.writeFile);

test('projectDirs() basics', async (t) => {
    const dirs = await projectDirs();
    t.true(Array.isArray(dirs));
    t.true(dirs.length > 0);
    t.true(dirs.includes(__dirname));
});

test('contains cwd if in repo', async (t) => {
    const cwd = await mkdirtemp();
    await writeFile(path.join(cwd, '.git'), '');
    const dirs = await projectDirs(cwd);
    t.true(dirs.includes(cwd));
});

test('contains cwd if in package', async (t) => {
    const cwd = await mkdirtemp();
    await writeFile(path.join(cwd, 'package.json'), '');
    const dirs = await projectDirs(cwd);
    t.true(dirs.includes(cwd));
});

test('cwd parent of repo', async (t) => {
    const project = await mkdirtemp();
    await writeFile(path.join(project, '.git'), '');
    const cwd = path.join(project, '..');
    const dirs = await projectDirs(cwd);
    t.true(dirs.includes(project));
    t.false(dirs.includes(cwd));
});

test('cwd parent of package', async (t) => {
    const project = await mkdirtemp();
    await writeFile(path.join(project, 'package.json'), '');
    const cwd = path.join(project, '..');
    const dirs = await projectDirs(cwd);
    t.true(dirs.includes(project));
    t.false(dirs.includes(cwd));
});

test('no code directory', async (t) => {
    const cwd = await mkdirtemp();
    const dirs = await projectDirs(cwd);
    t.is(dirs, null);
});
