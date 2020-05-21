// Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.
// We wrote a function, whatRelation(), that has one number parameter, 
// percentSharedDNA, and returns the likely relationship. 
// We expect the number passed in to always be an integer from 0 to 100, but for some reason 
// it’s not working!
// Here’s how it’s

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    } else if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return 'You are likely parent and child or full siblings.'
    } else if (percentSharedDNA >= 13 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    } else if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.'
    } else if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.'
    } else if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins'
    } else {
    return 'You are likely not related.'
}
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
