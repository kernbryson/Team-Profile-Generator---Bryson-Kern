function engineerData(users, selectedMember, github) {
  let internProfile = JSON.stringify(users);
  console.log(
    "this is the intern data" + internProfile,
    selectedMember,
    github
  );
  let internObject = {
    role: selectedMember,
    credentials: internProfile,
    github: github,
  };
  engineerArray.push(internObject);
  console.log(internArray);
}
const engineerArray = [];
module.exports = engineerData;

