const calculate = {}

calculate.overallCoverageForSkill = (users, skill) => {
    let overallLevel = 0
    let numPeopleAtMinimumLevel = 0
    let minimumLevel = 0
    let requiredAtMinimumLevel = 0

    users.forEach(user => {
        try {
            let record = user.skills.find(s => s.name === skill.name)
            minimumLevel = record.minimumLevel
            requiredAtMinimumLevel = record.requiredAtMinimumLevel
    
            let userLevel = record.user_skill.level
            overallLevel += userLevel
    
            if (userLevel >= minimumLevel) {
                ++numPeopleAtMinimumLevel
            }
        } catch (err) {
            return
        }
    })

    let coveragePercent = Math.round(numPeopleAtMinimumLevel / requiredAtMinimumLevel * 100)
    if (coveragePercent > 100) coveragePercent = 100

    let numPeopleRequiredToAchieveCoverage = requiredAtMinimumLevel - numPeopleAtMinimumLevel
    if (numPeopleRequiredToAchieveCoverage < 0) numPeopleRequiredToAchieveCoverage = 0

    return {
        skill: skill.name,
        overallLevel: overallLevel, // dunno if this is really useful for anything...
        numPeopleAtMinimumLevel: numPeopleAtMinimumLevel,
        numPeopleRequiredAtMinimumLevel: requiredAtMinimumLevel,
        numPeopleRequiredToAchieveCoverage: numPeopleRequiredToAchieveCoverage,
        coverageAchieved: (numPeopleAtMinimumLevel >= requiredAtMinimumLevel) ? true : false,
        coveragePercent: coveragePercent,
    }
}

export default calculate