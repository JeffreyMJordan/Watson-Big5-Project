
//Example version: 2017-10-13
export const getBigFive = (content, version) => {
  return $.ajax({
    url: '',
    method: 'POST',
    data: {content: content, 
           version: version}
  }).then(res => console.log(res));
};

