import data from './band-data.json';

// code relies on index to find info in source data for details page
// need to assign ID so data isn't impacted once filtered by search
// loops over the data and adds a new id property to each object to be used
// in URL for details
data.forEach((obj, i) => {
	obj.id = i
});

export default data;
