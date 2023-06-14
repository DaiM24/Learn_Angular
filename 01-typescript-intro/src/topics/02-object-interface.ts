interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // ? Oopcional o no definido
}


const strider: Character = {
    name: 'Dai',
    hp: 100,
    skills:['Bash','Count']
}

strider.hometown = 'Rivendell';

console.table(strider);

export{}