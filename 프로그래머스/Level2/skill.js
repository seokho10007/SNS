function solution(skill, skill_trees) {
    var answer = 0;
    const reg = new RegExp(`[${skill}]`, 'g');
    
    
    skill_trees.forEach((s) => {
        const str = (s.match(reg) || []).join('');
        if (str === '' || (str[0] === skill[0] && skill.indexOf(str) !== -1)) answer++;
        
});
    
    return answer;
}
