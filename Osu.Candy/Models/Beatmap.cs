using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Osu.Candy.Models
{
    public class Beatmap
    {
        public string Title { get; set; }
        public string Artist { get; set; }
        public string Creator { get; set; }
        public string Version { get; set; }
        public int BeatmapsetId { get; set; }
        public int MaxCombo { get; set; }
        public int Mode { get; set; }
        public Difficulty Difficulty { get; set; }
        public BPM BPM { get; set; }
        public double Length { get; set; }
    }
}
