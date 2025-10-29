import lodash from 'lodash'

const getInfoData = ({ fields = [], object = {} }: { fields: string[]; object: object }) => {
  return lodash.pick(object, fields)
}

export { getInfoData }
