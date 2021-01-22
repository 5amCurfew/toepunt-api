exports.getModel = async (req, res) => {
    const model = {
        intercept: 0.113983,
        is_home: 0.229118,
        AvD: 0.024168,
        MvM: 0.035651
    };

    res.send(model);
};