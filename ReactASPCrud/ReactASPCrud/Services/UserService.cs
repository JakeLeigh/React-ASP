using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactASPCrud.Models;

namespace ReactASPCrud.Services
{
    public class UserService
    {
        //simulating a database by creating a static list of users
        private static List<User> users = new List<User>();
        private static int Count = 1;
        //represents random users to pad out the database of users
        private static readonly string[] names = new string[] { "Jonathan", "Mary", "Susan", "Joe", "Paul", "Carl", "Amanda", "Neil" };
        private static readonly string[] surnames = new string[] { "Smith", "O'Neil", "MacDonald", "Gay", "Bailee", "Saigan", "Strip", "Spenser" };
        private static readonly string[] extensions = new string[] { "@gmail.com", "@hotmail.com", "@outlook.com", "@icloud.com", "@yahoo.com" };


        //initilise the list of random users 
        static UserService()
        {
            Random rnd = new Random();
            for(int i = 0; i < 5; i++)
            {
                string currName = names[rnd.Next(names.Length)];
                User user = new User
                {
                    id = Count++,
                    Name = currName + " " + surnames[rnd.Next(surnames.Length)],
                    Email = currName.ToLower() + extensions[rnd.Next(extensions.Length)],
                    Document = (rnd.Next(0, 10000) * rnd.Next(0, 10000)).ToString().PadLeft(10, '0'),
                    Phone = "07324234324"
                };
                users.Add(user);
            }
        }

        public List<User> getAll()
        {
            return users;
        }
        public User getById(int id)
        {
            return users.Where(user => user.id == id).FirstOrDefault();
        }
        public User Create(User user)
        {
            user.id = Count++;
            users.Add(user);
            return user;
        }
        public void Update(int id, User user)
        {
            User found = users.Where(n => n.id == id).FirstOrDefault();
            found.Name = user.Name;
            found.Email = user.Email;
            found.Document = user.Document;
            found.Phone = user.Phone;
        }
        public void Delete(int id)
        {
            users.RemoveAll(n => n.id == id);
        }

    }
}
