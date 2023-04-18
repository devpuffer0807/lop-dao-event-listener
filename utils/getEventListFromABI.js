/**
 * @author puffer
 * @dev get event list from abi
 * @param abi abi template should be the default
 * @return [EVENT_NAME_ARRAY]
 **/
module.exports = (abi) => {
  let eventLists = [];
  try {
    for (var i = 0; i < abi.length; i++) {
      if (abi[i].type === "event") {
        const _eventName = abi[i].name;
        const _inputs = abi[i].inputs;
        let _inputLists = [];
        for (var j = 0; j < _inputs.length; j++) {
          _inputLists.push(_inputs[j].name);
        }
        eventLists.push({
          name: _eventName,
          inputs: _inputLists,
        });
      }
    }

    return eventLists;
  } catch (e) {
    return [];
  }
};
