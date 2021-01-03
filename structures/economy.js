const schema = require('./../schema/economy')

module.exports = {
    createuser: async function(user, guild, name, message) {
        if(!user) throw new TypeError("No user id was provided")
    const createDoc = await schema.findOne({
      user
    })
    
    if(createDoc) return false
    
    const create = new schema({
      user,
      name
    })
    
    await create.save().catch(e => console.log(`Something went wrong while trying to create a new user: ${e}`))
    
    return create;
    },

    balance: async function(user, name) {
        if(!user) throw new TypeError("No user id was provided")        
        const fetchDoc = await schema.findOne({
          user
        })
        
        if(!fetchDoc) {
          const newFetch = new schema({
            user,
            name
          })
          
          newFetch.save().catch(e => console.log(`There was an error while trying to fetch data`))
          
          return newFetch;
        }
        
        return { money: fetchDoc.money, bank: fetchDoc.bank }
      
    },
    userdata: async function(user) {
      if(!user) throw new TypeError("No user id was provided")        
      const fetchData = await schema.findOne({
        user
      })
      
      if(!fetchData) {
        const newFetch = new schema({
          user,
          name
        })
        
        newFetch.save().catch(e => console.log(`There was an error while trying to fetch data`))
        
        return newFetch;
      }
      
      return fetchData
    
  },

    add: async function (user, name, amount, options) {
        if(!user) throw new TypeError("No user id was provided")
    if(!amount) throw new TypeError("An amount of money need to be provided")
    if(amount <= 0) throw new TypeError("Amount of money need to be greater than 0")
    
    const addDoc = await schema.findOne({
      user
    });
    if(!options) {
    
    if(!addDoc) {
      const newAdd = new schema({
        user: user,
        username: name,
        money: amount
      })
      
      await newAdd.save().catch(e => console.log(`Something went wrong while trying to add money: ${e}`))
      
      return newAdd;
    }
    
    addDoc.money += parseInt(amount, 10)
    addDoc.username = name
    await addDoc.save().catch(e => console.log(`Something went wrong while trying to add mone: ${e}`))
    
    return addDoc;
    } else {
      switch(options) {
        case 'wallet':
          const optionsDoc = await schema.findOne({
            user
          })
          
          if(!optionsDoc) {
            const newOp = new schema({
              user,
              name,
              money: amount
            })
            
            await newOp.save().catch(e => console.log(`Something went wrong: ${e}`))
            
            return newOp;
          }
          
          optionsDoc.money += amount
          
          optionsDoc.save().catch(e => console.log(`Something went wrong: ${e}`))
          
          return optionsDoc;
        case 'bank':
          const optionsBankDoc = await schema.findOne({
            user
          })
          
          if(!optionsBankDoc) {
            const newOps = new schema({
              user,
              name,
              bank: amount
            })
            
            await newOps.save().catch(e => console.log(`Something went wrong: ${e}`))
            
            return newOps;
          }
          
          optionsBankDoc.bank += amount
          
          optionsBankDoc.save().catch(e => console.log(`Something went wrong: ${e}`))
          
          return optionsBankDoc;
        default:
       throw new TypeError(`${options} is not a valid options`)
       
    }
    }
    
},
          sub: async function(user, amount, options){
            if(!user) throw new TypeError("No user id was provided")
            if(!amount) throw new TypeError("An amount of money need to be provided")
           
            if(amount <= 0) throw new TypeError("Amount of money need to be greater than 0")
            
            const subtractDoc = await schema.findOne({
              user
            })
            if(!options) {
              
            if(!subtractDoc) return false;
            
            subtractDoc.money -= amount
            
            subtractDoc.save().catch(e => console.log(`Something went wrong while trying to subtract money: ${e}`))
            
            return subtractDoc;
            } else {
              switch(options) {
                case 'wallet':
                  const optionsDoc = await schema.findOne({
                    user,
                    name
                  })
                  
                  if(!optionsDoc) return false
                  
                  optionsDoc.money -= amount
                  
                  optionsDoc.save().catch(e => console.log(`Something went wrong: ${e}`))
                  
                  return optionsDoc;
                case 'bank':
                  const optionsBankDoc = await schema.findOne({
                    user
                  })
                  
                  if(!optionsBankDoc) return false
                  
                  optionsBankDoc.bank -= amount
                  
                  optionsBankDoc.save().catch(e => console.log(`Something went wrong: ${e}`))
                  
                  return optionsBankDoc;
                default:
               throw new TypeError(`${options} is not a valid options`)
              }
            }
          },

        

}