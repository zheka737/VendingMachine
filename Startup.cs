using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using VendingMachine.Model.DAL;

namespace VendingMachine
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddDbContext<DbVendingMachineContext>(options =>
            {
                
            });

            services.AddScoped(typeof(CoinboxService));

            //SeedDB(services.BuildServiceProvider().GetService<DbVendingMachineContext>());
        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();


            app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

        }

        public void SeedDB(DbVendingMachineContext db)
        {
            if (!db.BeverageTypes.Any())
            {

                var beverageType1 = new BeverageType
                {
                    Name = "Pepsi",
                    Cost = 10,
                    Image = new byte[10]
                };
                db.BeverageTypes.Add(beverageType1);

                var beverageType2 = new BeverageType
                {
                    Name = "Cola",
                    Cost = 12,
                    Image = new byte[10]
                };
                db.BeverageTypes.Add(beverageType2);

                var beverageType3 = new BeverageType
                {
                    Name = "Sprite",
                    Cost = 7,
                    Image = new byte[10]
                };
                db.BeverageTypes.Add(beverageType3);

                var beverageStore1 = new BeverageStore
                {
                    BeverageType = beverageType1,
                    Quantity = 10
                };
                db.BeverageStores.Add(beverageStore1);

                var beverageStore2 = new BeverageStore
                {
                    BeverageType = beverageType2,
                    Quantity = 10
                };
                db.BeverageStores.Add(beverageStore2);

                var beverageStore3 = new BeverageStore
                {
                    BeverageType = beverageType3,
                    Quantity = 10
                };
                db.BeverageStores.Add(beverageStore3);

                var coinType1 = new CoinType
                {
                    Nominal = 1
                };
                db.CoinTypes.Add(coinType1);

                var coinType2 = new CoinType
                {
                    Nominal = 2
                };
                db.CoinTypes.Add(coinType2);

                var coinType5 = new CoinType
                {
                    Nominal = 5
                };
                db.CoinTypes.Add(coinType5);

                var coinType10 = new CoinType
                {
                    Nominal = 10
                };
                db.CoinTypes.Add(coinType10);

                var coinSettings1 = new CoinTypeSettings
                {
                    CoinType = coinType1,
                    Blocked = false
                };
                db.CoinTypeSettings.Add(coinSettings1);

                var coinSettings2 = new CoinTypeSettings
                {
                    CoinType = coinType2,
                    Blocked = false
                };
                db.CoinTypeSettings.Add(coinSettings2);

                var coinSettings5 = new CoinTypeSettings
                {
                    CoinType = coinType5,
                    Blocked = false
                };
                db.CoinTypeSettings.Add(coinSettings5);

                var coinSettings10 = new CoinTypeSettings
                {
                    CoinType = coinType10,
                    Blocked = false
                };
                db.CoinTypeSettings.Add(coinSettings10);

                var coinVault1 = new CoinVault
                {
                    CoinType = coinType1,
                    Count = 15
                };
                db.CoinVaults.Add(coinVault1);

                var coinVault2 = new CoinVault
                {
                    CoinType = coinType2,
                    Count = 15
                };
                db.CoinVaults.Add(coinVault2);

                var coinVault5 = new CoinVault
                {
                    CoinType = coinType5,
                    Count = 15
                };
                db.CoinVaults.Add(coinVault5);

                var coinVault10 = new CoinVault
                {
                    CoinType = coinType10,
                    Count = 15
                };
                db.CoinVaults.Add(coinVault10);


                db.SaveChanges();

                System.Console.WriteLine("Data Seeded");
            }
        }
    }
}
