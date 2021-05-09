const calculate = {}

calculate.overallCoverageForSkill = (users, skillName) => {
    let overallLevel = 0
    let numPeopleAtMinimumLevel = 0
    let minimumLevel = 0
    let requiredAtMinimumLevel = 0

    users.forEach(user => {
        try {
            let skill = user.skills.find(s => s.name === skillName)
            minimumLevel = skill.minimumLevel
            requiredAtMinimumLevel = skill.requiredAtMinimumLevel
    
            let userLevel = skill.user_skill.level
            overallLevel += userLevel
    
            if (userLevel >= minimumLevel) {
                ++numPeopleAtMinimumLevel
            }
        } catch (err) {
            return err
        }
    })

    return {
        skill: skillName,
        overallLevel: overallLevel, // dunno if this is really useful for anything...
        numPeopleAtMinimumLevel: numPeopleAtMinimumLevel,
        numPeopleRequiredAtMinimumLevel: requiredAtMinimumLevel,
        numPeopleRequiredToAchieveCoverage: requiredAtMinimumLevel - numPeopleAtMinimumLevel,
        coverageAchieved: (numPeopleAtMinimumLevel >= requiredAtMinimumLevel) ? true : false,
        coveragePercent: Math.round(numPeopleAtMinimumLevel / requiredAtMinimumLevel * 100),
    }
}

export default calculate