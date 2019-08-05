const totalPortfolioValue = (ticker, portfolio) => {

    let count = 0;

    for (let folio of portfolio) {
        count += ticker[ticker.indexOf(folio[0]) +1] * folio[1];
    }

    return count
}