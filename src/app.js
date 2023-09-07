const fs = require('fs/promises');
const path = require('path'); // Cambia 'node:path' a 'path'
const pc = require('picocolors');

const folder = process.argv[2] ?? '.';

const ls = async () => {
  let archs;

  try {
    archs = await fs.readdir(folder);
  } catch (err) {
    console.log(pc.red('error al leer fichero no existe '));
    process.exit(1);
  }

  const filprom = archs.map(async (arch) => {
    const flpath = path.join(folder, arch);
    let flstat;

    try {
      flstat = await fs.stat(flpath);
    } catch (error) {
      console.log(pc.red('error al leer datos del archivo'));
    }

    const isdir = flstat.isDirectory();
    const fltype = isdir ? 'd' : 'f';
    const flsize = flstat.size;
    const flmodif = flstat.atime.toLocaleString();

    return `${pc.red(fltype)} ${pc.blue(arch)} ${pc.green(flsize.toString().padStart(8))} ${pc.yellow(flmodif)} `;
  });

  const flinfo = await Promise.all(filprom);
  flinfo.map((fls) => console.log(fls));
};

ls(folder);
