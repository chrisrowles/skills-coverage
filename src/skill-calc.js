const staff = [
    {
        id: 1,
        name: "Alan Ward",
        skills: []
    },
    {
        id: 2,
        name: "Bemi Irone",
        skills: []
    },
    {
        id: 3,
        name: "Chris Pateman",
        skills: []
    },
    {
        id: 4,
        name: "Chris Rowles",
        skills: []
    },
    {
        id: 5,
        name: "Daudi W",
        skills: []
    },
    {
        id: 6,
        name: "Jon White",
        skills: []
    },
    {
        id: 7,
        name: "Kat G",
        skills: []
    },
    {
        id: 8,
        name: "Matt Boothman",
        skills: []
    },
    {
        id: 9,
        name: "Nick Chikore",
        skills: []
    }
]

const skills = [
    {
        id: 1,
        name: "dotnet",
        weighting: 1.0,
        minimumLevel: 5,
        requiredAtMinimumLevel: 5
    },
    {
        id: 2,
        name: "javascript",
        weighting: 1.0,
        minimumLevel: 5,
        requiredAtMinimumLevel: 4
    },
    {
        id: 3,
        name: "angular",
        weighting: 1.0,
        minimumLevel: 5,
        requiredAtMinimumLevel: 4
    },
    {
        id: 4,
        name: "aws",
        weighting: 1.0,
        minimumLevel: 5,
        requiredAtMinimumLevel: 3
    },
    {
        id: 5,
        name: "gcp",
        weighting: 1.0,
        minimumLevel: 5,
        requiredAtMinimumLevel: 3
    },
    {
        id: 6,
        name: "azure",
        weighting: 1.0,
        minimumLevel: 5,
        requiredAtMinimumLevel: 4
    }
]

const manager = {}

manager.assign = (member, skill, level) => {
    if (!member.skills.find(s => s.name === skill.id)) {
        member.skills.push({
            name: skill.name,
            level: level
        })
    }
    console.log(member)
}


/**
 * concept
 */
skills.forEach(skill => {
    let level = Math.floor(Math.random() * 6)
    staff.forEach(member => manager.assign(member, skill, level))
})