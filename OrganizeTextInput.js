function organizarTexto(inputText) {
    const lines = inputText.split('\n');
    const outputLines = [];

    for (let i = 0; i < lines.length; i += 6) {
        const groupedLines = lines.slice(i, i + 6);
        const concatenatedLine = groupedLines.join('|');
        outputLines.push(concatenatedLine);
    }

    const result = outputLines.join('\n');
    return result;
}

// Ejemplo de uso con tu texto de entrada
const inputText = `DAY
CLUB/ACTIVITY
WHO
TIME
WHERE
LEADER
Monday
Student librarians
All Years
Break/Lunchtime
Library
Mrs Patterson
Monday
Adventures in Reading Club
Years 7 & 8
3.20 - 4.00pm
B28
Ms Moosa
Monday
Orchestra
All Years
3.20 - 4.45pm
A Block Hall
Miss Sargeson
Monday
Choir
All Years
Lunchtime
A51
Mr Jessop
Monday
Numeracy Club
KS3
Lunchtime
A9
Miss Cotton
Monday
Read to Succeed
Year 7
Break, lunchtime
Library
Mr Lancaster
Monday
Football Club
Year 8
3.20 - 4.20pm
Field or 3G
Mr Mayes
Monday
School Choir
All Years
Lunchtime
A51
Mr Jessop
Monday
Football Club
Year 7
3.20 - 4.20pm
Field or 3G
Mr David/Coughlin
Tuesday
Microbit Club
Years 7 & 8
Lunchtime
A29
Mrs Nyamhanza
Monday
Netball Club
Years 9,10 & 11
3.20 - 4.20pm
Netball courts
Mrs Sobota
Monday
Supported Prep Club
Years 9,10 & 11
3.20 - 4.20pm
B25
Ms Dearmun
Monday
Swimming club (starting 26.02.2024 )
All years
3.20- 4.10pm
Swimming pool
Mrs Sullivan/Miss Clermont
Monday
Board Game Club
Years 7-11
12.30-1.10
B35
Mrs White
Tuesday
Student librarians
All Years
Break/Lunchtime
Library
Mrs Patterson
Tuesday
Read to Succeed
Year 7
Break/Lunchtime
Library
Mr Lancaster
Tuesday
Supported Prep Club
Years 7 & 8
3.20 - 4.20pm
B25
Ms Dearman
Tuesday
Sports leaders club
Year 8 & 9
3.20.- 4.20pm
courts or 3g
Mr Williams/ Mr Oneil
Tuesday
French Revision Prep club
Year 11
Lunchtime
B9
Mrs Jennings
Tuesday
KS3/KS4 Maths Surgery
All Years
Lunchtime
A27
Miss Godfrey-Evans/Ms Sharma
Wednesday
Basketball club
All Years
7.45 - 8.30am
Upper Courts
Mr Mayes
Wednesday
Student librarians
All Years
Break/Lunchtime
Library
Mrs Patterson
Wednesday
Table Tennis Club
All Years
Lunchtime
A Block Hall
Mr Gillon
Wednesday
Trampoline Club
All Years
3.20 - 4.20pm
A Block hall
Miss Chilton
Wednesday
French and Spanish Spelling Bee Club
Year 7
lunchtime
B10
Mrs Kleanthous
Wednesday
Diversity Club
All Years
Lunchtime
A25
Shah
Wednesday
Social Sciences Club
Year 9 to 13
3.20 - 4.00pm
C4
Miss Saliba
Wednesday
Jazz Band
All Years
3.20 - 4.15pm
A51
Mr Flowers
Wednesday
Trampoline Club
All Years
3.20 - 4.15pm
A Block Hall
Ms Chilton
Wednesday
Read to Succeed
Year 7
Break, lunchtime
Library
Mr Lancaster
Wednesday
YA Bookclub
Year 9, 10 and 11
3:20-4:20
B28
Ms Moosa
Wednesday
Creative writing club
Years 7 to 11
Lunchtime
B35
Miss Rochford
Wednesday
Football Club
Year 9 & 10
3.20 - 4.20pm
Field or 3G
Mr Heather & Mr Thompson
Wednesday
Supported Prep Club
Years 9,10 & 11
3.20 - 4.20pm
B25
Ms Dearman
Wednesday
KS5 book club (once every half term)
Years 12 and 13
3.30-4.15 pm
B35
Miss Rochford
Wednesday
Dance Club
Years 7 to 11
3:20 - 4:20pm
Drama Studio
Miss Twiss
Wednesday
Netball Club
Years 7 & 8
3.20 - 4.20pm
Netball courts
Miss Clermont
Wednesday
Microbit Club
Years 7 & 8
Lunchtime
A29
Mrs Nyamhanza
Wednesday
Sixth Form Games
Years 12 and 13
1:20-3:20pm
3G pitch and courts
Mrs Sobota and Mr Gillon
Wendesday
Rugby Club
All years
3.20-4.20PM
Field/3G
Mr Mayes
Wednesday
Maths Challenge Club
Years 7 to 11
3.20 - 4.20pm
A7
Miss Godfrey-Evans
Wedneday
History Club
All Welcome
Lunchtime
A31
Mr Hurle
Wednesday
MFL Prep support
All welcome
12:40 to 1:10
B10
Mrs Kleanthous
Thursday
Student librarians
All Years
Break/Lunchtime
Library
Mrs Patterson
Thursday
Music Tech Club
All Years
Lunchtime
Music Dept
Mr Flowers
Thursday
Read to Succeed
Year 7
Break, lunchtime
Library
Mr Lancaster
Thursday
Maths Explorers
Year 7
Lunchtime
A24
Mrs Rayment
Thursday
Science Club
Year 7
3.20 - 4.10pm
B40
Mrs Hazon
Thursday
Supported Prep Club
Years 7 & 8
3.20 - 4.20pm
B25
Ms Dearman
Thursday
Ethnic Minorities Club
All years
Lunchtime
A25
Shah
Thursday
Crest Science Club
Year 10
3.20 - 4.15pm
B54
Mrs Traynor
Thursday
Programming Club
Year 9
Lunchtime
A29
Mrs Kendrick
Thursday
KS4 French Club
Years 11
3:20 to 4:20pm
B9
Mrs Jennings
Thursday
Food and Nutrition Coursework Club
Year 11
3.20 - 4.20pm
E Block
Mrs Hartley
Thursday
Basketball Club
All Years
3.20-4.20
New Courts
Mr Mayes and Miss Steadman
Thursday
DT Coursework Support Club
Year 11
3.20 - 4.20pm
D Block
Mrs Hartley
Thursday
Girls Football club
Years 9 to 11
3.20 - 4.20pm
3G
Mr Heather
Thursday
Programming Club
Year 9
Lunchtime
A29
Ms Kendrick
Thursday
Chess Club
Years 7 to 11
Lunchtime
A7
MS Sharma
Friday
Ultimate Frisbee Club
All Years
7.45 - 8.30am
3G
Mr Mayes
Friday
Student librarians
All Years
Break/Lunchtime
Library
Mrs Patterson
Friday
Guitar Club
All Years
Lunchtime
A51
Mr Dawson
Friday 2nd half term
Positive book group (odd weeks)
Year 7
Lunchtime
Library
Mr Lancaster
Friday
Film Club (Create and Review)
Years 7 - 10
Lunchtime
A29
Mr Heather
Friday
Girls Football club
All Years
3.20 - 4.20pm
Field or 3G
Ms Steadman
Friday
Running Club
All Years
3.20 - 4.20pm
Field
Mr Coughlin
Friday
Read to Succeed
Year 7
Break, lunchtime
Library
Mr Lancaster
Friday
Football club
Years 11 to 13
3.20 - 4.20pm
Field or 3G
Mr Gillon
Friday
Senior Guitar Club
All Years
3.20-4pm
A51
Mr Dawson
Friday
Fashion Illustration Club
Years 7 & 8
Lunchtime
E2
Miss Sordillo
Friday
French Speaking Practice Club
Y11
7.45 - 8.15am
B9
Mrs Jennings`;

const outputText = organizarTexto(inputText);
console.log(outputText);