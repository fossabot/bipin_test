if (!req.body.lastName || req.body.lastName == "") {
        return next(new errors.BadRequest('Please enter last name.', 1000));
    }
    if (!email || email == "") {
        return next(new errors.BadRequest('Please enter email id.', 1000));
    }
    if (!emailPattern.test(email)) {
        return next(new errors.BadRequest('Please enter valid email address.', 1000));
    }
