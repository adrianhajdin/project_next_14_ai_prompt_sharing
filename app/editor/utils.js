
export const fetchMappings = async ({id}) => {
  console.log('USE EFFECT START')
  const response = await fetch(`/api/deviceProfiles`)
  console.log('FETCHED RESPONSE ok?:' + response.ok + response)

  const data = await response.json()
  console.log('FETCHED DATA' + data)


  //   const parsed = await data.map(function (d) { return d.toObject() })

  setGameVersionOptions(JSON.parse(JSON.stringify(data)))
}

export function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
