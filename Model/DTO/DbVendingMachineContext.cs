using Microsoft.EntityFrameworkCore;

namespace VendingMachine.Model.DAL
{

    public class DbVendingMachineContext : DbContext
    {

        public DbVendingMachineContext(DbContextOptions options): base(options) {}

        public DbSet<BeverageStore> BeverageStores { get; set; }

        public DbSet<BeverageType> BeverageTypes { get; set; }

        public DbSet<CoinType> CoinTypes { get; set; }

        public DbSet<CoinTypeSettings> CoinTypeSettings { get; set; }

        public DbSet<CoinVault> CoinVaults { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<BeverageStore>(entity => {
                entity.HasKey(e => e.BeverageTypeId);
                entity.HasOne(e => e.BeverageType).WithMany();
            });

            modelBuilder.Entity<CoinTypeSettings>(entity => {
                entity.HasKey(e => e.CoinTypeId);
                entity.HasOne(e => e.CoinType).WithMany();
            });

            modelBuilder.Entity<CoinVault>(entity => {
                entity.HasKey(e => e.CoinTypeId);
                entity.HasOne(e => e.CoinType).WithMany();
            });
        }
    }

}