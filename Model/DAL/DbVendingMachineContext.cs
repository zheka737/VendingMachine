using Microsoft.EntityFrameworkCore;

namespace VendingMachine.Model.DAL
{

    public class DbVendingMachineContext : DbContext
    {

        public DbVendingMachineContext(DbContextOptions options): base(options) {}

        public DbVendingMachineContext()
        {
        }

        public DbSet<BeverageStore> BeverageStores { get; set; }

        public DbSet<BeverageType> BeverageTypes { get; set; }

        public DbSet<CoinType> CoinTypes { get; set; }

        public DbSet<CoinTypeSettings> CoinTypeSettings { get; set; }

        public DbSet<CoinVault> CoinVaults { get; set; }

        public DbSet<CoinInBasket> CoinsInBasket {get; set;}


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            optionsBuilder.UseSqlServer(
                @$"Data Source=localhost\SQLEXPRESS;DataBase=VendingMachineDB;Integrated Security=True;Connect Timeout=30;AttachDbFilename={Startup.MDF_Directory}");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<BeverageStore>(entity => {
                entity.HasOne(e => e.BeverageType).WithOne(o => o.BeverageStore).HasForeignKey<BeverageStore>(e => e.BeverageTypeId);
            });

            modelBuilder.Entity<CoinTypeSettings>(entity => {
                entity.HasOne(e => e.CoinType).WithOne(o => o.CoinTypeSettings).HasForeignKey<CoinTypeSettings>(e => e.CoinTypeId);
            });

            modelBuilder.Entity<CoinVault>(entity => {
                entity.HasOne(e => e.CoinType).WithOne(o => o.CoinVault).HasForeignKey<CoinVault>(e => e.CoinTypeId);;

            });

            //modelBuilder.Entity<BeverageType>(entity => entity.Ignore(e => e.Image));

            modelBuilder.Entity<CoinInBasket>(entity => {
                entity.HasOne(e => e.CoinType).WithMany().HasForeignKey(e => e.CoinTypeId);
            });
        }
    }

}