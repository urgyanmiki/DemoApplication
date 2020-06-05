using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WevAPI.Models
{
    public partial class BloggerDBContext : DbContext
    {
        public BloggerDBContext()
        {
        }

        public BloggerDBContext(DbContextOptions<BloggerDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Tblcomments> Tblcomments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-I08SRVV; Database=BloggerDB; Trusted_Connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tblcomments>(entity =>
            {
                entity.HasKey(e => e.Commentid);

                entity.ToTable("tblcomments");

                entity.Property(e => e.Commentid).HasColumnName("commentid");

                entity.Property(e => e.Comment)
                    .IsRequired()
                    .HasColumnName("comment")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("title")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });
        }
    }
}
