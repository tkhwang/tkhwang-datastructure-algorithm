/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const handlePlus = name => {
    const n = name.split("+");
    return n[0];
  };

  const handleDot = name => {
    const m = name.split(".");
    return m.join("");
  };

  let result = [];
  emails.forEach(email => {
    let local = email.split("@")[0];
    let domain = email.split("@")[1];

    local = handlePlus(handleDot(local));

    result.push(local + "@" + domain);
  });

  const newSet = new Set(result);
  console.log("TCL: numUniqueEmails -> newSet", newSet);

  return [...newSet].length;
};

module.exports = numUniqueEmails;
