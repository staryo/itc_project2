const queueLimit = 300

export default async function chunkCompanyList(companyList) {
    let result = []
    let queue = ''
    await companyList.map(async (symbol, count) => {
        if (queue.length > queueLimit || count === companyList.length - 1) {
            queue += `${symbol}`
            result.push(queue)
            queue = ''
        } else queue += `${symbol},`
    })
    return result
}