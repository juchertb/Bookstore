using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IItemCategoryRepository
    {
        Task<List<ItemCategory>> GetAllAsync(ItemCategoryQueryObject query);      
    }
}