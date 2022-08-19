   var Count_Vowels= (S) => 
{
  const vowels = S.match(/[aeiou]/gi); 
        return vowels.length;
};
var Count_Consonants= (S) => 
{
  const consonants = S.match(/[^aeiou]/gi);
        return consonants.length    
};