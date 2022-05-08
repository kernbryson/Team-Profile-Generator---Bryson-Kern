function internData(users, selectedMember, school) {
  let internProfile = JSON.stringify(users);
  console.log(
    "this is the intern data" + internProfile,
    selectedMember,
    school
  );
  let internObject = {
    role: selectedMember,
    credentials: internProfile,
    school: school,
  };
  internArray.push(internObject);
  console.log(internArray);
}
const internArray = [];
module.exports = internData;
