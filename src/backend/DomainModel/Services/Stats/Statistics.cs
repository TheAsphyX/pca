﻿//-----------------------------------------------------------------------
// <copyright file="Statistics.cs" company="CNVVF">
// Copyright (C) 2018 - CNVVF
//
// This file is part of Public Competition Application (PCA).
// PCA is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// PCA is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see http://www.gnu.org/licenses/.
// </copyright>
//-----------------------------------------------------------------------
namespace DomainModel.Services.Stats
{
    public class Statistics
    {
        public Statistics(long totalActiveApplicationsEver,
            long totalSubmissionsEver,
            long duplicateFiscalCodeErrors,
            long otherErrors,
            long submittedToday,
            long submittedInTheLastFiveDays)
        {
            TotalActiveApplicationsEver = totalActiveApplicationsEver;
            TotalSubmissionsEver = totalSubmissionsEver;
            DuplicateFiscalCodeErrors = duplicateFiscalCodeErrors;
            OtherErrors = otherErrors;
            SubmittedToday = submittedToday;
            SubmittedInTheLastFiveDays = submittedInTheLastFiveDays;
        }

        public long TotalActiveApplicationsEver { get; }
        public long TotalSubmissionsEver { get; }
        public long DuplicateFiscalCodeErrors { get; }
        public long OtherErrors { get; }
        public long SubmittedToday { get; }
        public long SubmittedInTheLastFiveDays { get; }
    }
}