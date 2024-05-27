function meeting(s) {
    const words = s.split(";");
    let result = []
    for (const word of words) {
        const name = word.split(":")
        result.push(`(${name[1].toUpperCase()}, ${name[0].toUpperCase()})`)
    }
    return result.sort().join("")
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))

